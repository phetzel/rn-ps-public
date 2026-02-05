import BottomSheet, {
  BottomSheetView as BSView,
  BottomSheetModalProvider,
  BottomSheetModal as BSModal,
  BottomSheetScrollView as BSScrollView,
  BottomSheetHandle as BSHandle,
} from '@gorhom/bottom-sheet';
import { cssInterop } from 'nativewind';
import React, { Fragment, forwardRef } from 'react';

import type { BottomSheetProps, BSHandleProps } from './types';

const BottomSheetTrigger = Fragment;

const BottomSheetModal = forwardRef<
  BSModal,
  BottomSheetProps & { children: React.ReactNode; isOpen?: boolean }
>(({ children, ...rest }: BottomSheetProps, ref) => {
  return (
    <BSModal ref={ref} {...rest}>
      {children}
    </BSModal>
  );
});
BottomSheetModal.displayName = 'BottomSheetModal';

const BottomSheetView = cssInterop(BSView, {
  className: 'style',
});

const BottomSheetScrollView = cssInterop(BSScrollView, {
  className: 'style',
  contentContainerclassName: 'contentContainerStyle',
});

const BottomSheetHandle: React.FC<BSHandleProps> = BSHandle;

export {
  BottomSheet,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetTrigger,
  BottomSheetHandle,
};
