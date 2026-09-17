import type { NextConfig } from 'next';

const isStaticExport = process.env.STATIC_EXPORT === '1';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'LearnEnglish';

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: 'export',
        basePath: `/${repositoryName}`,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
