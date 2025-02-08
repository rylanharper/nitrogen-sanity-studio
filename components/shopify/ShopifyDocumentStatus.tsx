import { forwardRef, useState } from 'react';
import { CloseIcon, ImageIcon, WarningOutlineIcon } from '@sanity/icons';

type Props = {
  isActive?: boolean;
  isDeleted: boolean;
  title: string;
  type: 'collection' | 'product';
  url: string;
};

export const ShopifyDocumentStatus = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { isActive, isDeleted, type, url, title } = props;
    const [imageVisible, setImageVisible] = useState(true);

    // Hide image on error / 404
    const handleImageError = () => setImageVisible(false);

    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          borderRadius: 'inherit',
          overflow: 'hidden'
        }}
      >
        {imageVisible && url ? (
          <img
            alt={`${title} preview`}
            onError={handleImageError}
            src={`${url}&width=400`}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              top: 0,
              left: 0,
              objectFit: 'contain'
            }}
          />
        ) : (
          <ImageIcon style={{ position: 'absolute' }} />
        )}

        {/* Item has been deleted */}
        {isDeleted ? (
          <CloseIcon
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              background: 'rgba(255, 0, 0, 0.7)',
              color: '#ffffff'
            }}
          />
        ) : (
          <>
            {/* Products only: item is no longer active */}
            {type === 'product' && !isActive && (
              <WarningOutlineIcon
                style={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: '#ffffff'
                }}
              />
            )}
          </>
        )}
      </div>
    );
  }
);

ShopifyDocumentStatus.displayName = 'ShopifyDocumentStatus';
