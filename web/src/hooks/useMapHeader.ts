import { useState, useEffect } from 'react';

import { useIsOpen } from '@/hooks/_common/useIsOpen';

export const useMapHeader = () => {
  const [isListVisible, setIsListVisible] = useState(true);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);

  const { isOpen: isListOpen, open: openList, close: closeList } = useIsOpen();
  const { isOpen: isSearchBarOpen, open: openSearchBar, close: closeSearchBar } = useIsOpen();

  useEffect(() => {
    if (isListOpen) setIsSearchBarVisible(false);
    else setIsSearchBarVisible(true);
  }, [isListOpen]);

  useEffect(() => {
    if (isSearchBarOpen) setIsListVisible(false);
    else setIsListVisible(true);
  }, [isSearchBarOpen]);

  return {
    isListVisible,
    isSearchBarVisible,
    isListOpen,
    openList,
    closeList,
    isSearchBarOpen,
    openSearchBar,
    closeSearchBar,
  };
};
