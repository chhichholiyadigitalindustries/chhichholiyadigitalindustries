import React from 'react';
import { CDI_BRAND, resolvePublicAsset } from '../config/brand';

export default function BrandLogo({
  alt = 'Chhichholiya Digital Industries Logo',
  className = 'h-9 sm:h-10 w-auto object-contain',
  loading = 'eager',
  fetchPriority,
}) {
  const webpSrc = resolvePublicAsset(CDI_BRAND.logoWebpPath);
  const pngSrc = resolvePublicAsset(CDI_BRAND.logoPngPath);

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={pngSrc}
        alt={alt}
        width={480}
        height={360}
        loading={loading}
        decoding="async"
        {...(fetchPriority ? { fetchPriority } : {})}
        className={className}
      />
    </picture>
  );
}
