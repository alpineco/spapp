import loadable from '@loadable/component';

const TestPage = loadable(() => import('./features/shared/components/Test'), { resolveComponent: components => components.Test });
export const TestPageRoute = () => <TestPage />;