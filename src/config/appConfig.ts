/**
 * SMART BATTLE Application Configuration
 * 
 * To connect your APK file when it is uploaded:
 * 1. Host your APK file on your server, AWS S3, Cloudflare R2, or GitHub Releases.
 * 2. Set APK_DOWNLOAD_URL to your direct download link (e.g. "https://download.smartbattle.esports/smart-battle-v1.0.apk").
 * 3. Update APK_VERSION, FILE_SIZE, and CHECKSUM_SHA256 accordingly.
 */

export interface AppConfig {
  appName: string;
  tagline: string;
  version: string;
  packageName: string;
  minAndroidVersion: string;
  targetAndroidVersion: string;
  architecture: string;
  estimatedSize: string;
  status: 'coming_soon' | 'ready';
  apkDownloadUrl: string | null;
  releaseDateEstimate: string;
  officialDomain: string;
  supportEmail: string;
  githubRepoName: string;
}

export const APP_CONFIG: AppConfig = {
  appName: 'SMART BATTLE',
  tagline: 'PLAY HARDLY WIN SMARTLY',
  version: '1.0.0',
  packageName: 'com.smartbattle.esports',
  minAndroidVersion: 'Android 8.0 (Oreo) or higher',
  targetAndroidVersion: 'Android 14 / 15',
  architecture: 'Universal (arm64-v8a / armeabi-v7a)',
  estimatedSize: '~48.5 MB',
  status: 'ready',
  apkDownloadUrl: 'https://github.com/SMRT-bit123/Smart-battle-website/raw/refs/heads/main/smart_battle.apk', 
  releaseDateEstimate: 'Official Build Available',
  officialDomain: 'smartbattle.app',
  supportEmail: 'support@smartbattle.example.com',
  githubRepoName: 'SMRT-bit123/SMART-BATTLE-DOWNLOAD',
};
