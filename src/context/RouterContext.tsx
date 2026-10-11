import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/programs'
  | '/membership'
  | '/supplements'
  | '/join'
  | '/contact'
  | '/privacy'
  | '/terms';

interface RouterContextType {
  currentPath: string;
  queryParams: URLSearchParams;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  queryParams: new URLSearchParams(),
  navigate: () => {}
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [queryParams, setQueryParams] = useState<URLSearchParams>(() => {
    return new URLSearchParams(window.location.search);
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setQueryParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    let path = to;
    let search = '';

    if (to.includes('?')) {
      const parts = to.split('?');
      path = parts[0];
      search = '?' + parts[1];
    }

    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    window.history.pushState({}, '', path + search);
    setCurrentPath(path);
    setQueryParams(new URLSearchParams(search));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, queryParams, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
