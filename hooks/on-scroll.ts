const useOnScroll = (callback: (value: boolean) => void) => {
  return function ({ nativeEvent }: any) {
    {
      const currentScrollPosition =
        Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
      callback(currentScrollPosition <= 0);
    }
  };
};

export default useOnScroll;
