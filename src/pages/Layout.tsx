import React, { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Navbar } from '../components/layout/Navbar';
import { AIChatAssistant } from '../components/ai/AIChatAssistant';
import { Login } from '../components/auth/Login';

const AUTH_STORAGE_KEY = 'salesmind_auth_session';

type AuthSession = {
  isAuthenticated: boolean;
  expiresAt: number;
};

const SESSION_TIMEOUT_MINUTES = Number(import.meta.env.VITE_SESSION_TIMEOUT_MINUTES ?? 30);
const SESSION_TIMEOUT_MS = (Number.isFinite(SESSION_TIMEOUT_MINUTES) && SESSION_TIMEOUT_MINUTES > 0
  ? SESSION_TIMEOUT_MINUTES
  : 30) * 60 * 1000;

function readSession(): AuthSession | null {
  const raw = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as AuthSession;
    if (parsed.isAuthenticated && typeof parsed.expiresAt === 'number') {
      return parsed;
    }
  } catch {
    // Ignore broken session payload and force re-login below.
  }

  return null;
}

function writeSession() {
  const session: AuthSession = {
    isAuthenticated: true,
    expiresAt: Date.now() + SESSION_TIMEOUT_MS,
  };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleLogout = useCallback(() => {
    clearSession();
    setIsAuthenticated(false);
  }, []);

  const handleLogin = useCallback(() => {
    writeSession();
    setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    const session = readSession();
    if (session && session.expiresAt > Date.now()) {
      setIsAuthenticated(true);
    } else {
      clearSession();
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const session = readSession();
    if (!session) {
      setIsAuthenticated(false);
      return;
    }

    const remainingMs = session.expiresAt - Date.now();
    if (remainingMs <= 0) {
      handleLogout();
      return;
    }

    const timerId = window.setTimeout(() => {
      handleLogout();
    }, remainingMs);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isAuthenticated, handleLogout]);

  if (!isReady) return null;

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <Navbar onLogout={handleLogout} />
        <Outlet />
      </main>

      <AIChatAssistant />
    </div>
  );
}
