import * as React from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '~/components/ui/alert-dialog';
import { Text } from '~/components/ui/text';
import { FICTION_DISCLAIMER_TEXT } from '~/lib/constants';
import { acknowledgeFictionDisclaimer } from '~/lib/db/helpers';
import { useDisclaimerDialogStore } from '~/lib/stores/disclaimerDialogStore';

export function DisclaimerModal() {
  const { isOpen, close } = useDisclaimerDialogStore();

  const handleAcknowledge = async () => {
    try {
      await acknowledgeFictionDisclaimer();
    } finally {
      close();
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle accessibilityRole="header">Legal disclaimer</AlertDialogTitle>
          <AlertDialogDescription>{FICTION_DISCLAIMER_TEXT}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogAction
          onPress={handleAcknowledge}
          accessibilityLabel="Acknowledge legal disclaimer"
        >
          <Text>I understand</Text>
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
