import { useEffect, useState } from 'react';

/**
 *用于判断一个值是否为布尔值
 排除value为0的特殊情况
 *
 * */
export const isFasly = (value: any) => (value === 0 ? false : !value);

/**
 * 清除对象中值为空的键
 */
export const cleanObj = (obj: { [key: string]: any }) => {
  const res = { ...obj };
  Object.keys(res).forEach((key) => {
    const value = res[key];
    //排除value为0的特殊情况
    if (isFasly(value) || value === '') {
      delete res[key];
    }
  });
  return res;
};

/**
 * 初始化hook
 */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

/**
 * 防抖hook
 * 减少搜索频率
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    //销毁，只有最后一次才生效
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

export interface ValueProps {
  name: string;
  age: number;
}
export const useArray = <T extends ValueProps>(persons: T[]) => {
  const [value, setValue] = useState<T[]>(persons);

  const add = (obj: T) => {
    setValue([...value, obj]);
  };

  const removeIndex = (removeIndex: number) => {
    setValue(value.filter((el, index) => index !== removeIndex));
  };
  const clear = () => {
    setValue([]);
  };
  return {
    value,
    add,
    removeIndex,
    clear,
  };
};
