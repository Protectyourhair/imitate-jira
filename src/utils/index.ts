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
