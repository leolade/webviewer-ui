import React from 'react';
import { useSelector } from 'react-redux';
import selectors from 'selectors';
import FlyoutMenu from 'components/FlyoutMenu/FlyoutMenu';
import PageRotationControls from 'components/PageManipulationOverlay/PageRotationControls';

function RotatePopup() {
  const selectedPageIndexes = useSelector((state) => selectors.getSelectedThumbnailPageIndexes(state));

  return (
    <FlyoutMenu menu="thumbnailsControlRotatePopup" trigger="thumbnailsControlRotatePopupTrigger" onClose={undefined}>
      <PageRotationControls pageNumbers={selectedPageIndexes.map((i) => i + 1)} warn/>
    </FlyoutMenu>
  );
}

export default RotatePopup;