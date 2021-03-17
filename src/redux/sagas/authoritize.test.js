// import loginFlow from './authoritize'; //крашиться, там генератор
import { functionName } from './authoritize'; // эта тоже, там функция
import { testAction } from './someFileForTests'; //а эта нет, она не из authoritize
it('login flow', async () => {});
