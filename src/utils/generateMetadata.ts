export interface SeoDataResponse {
  description: string;
  title: string;
}

export async function generateMetadata({
  description,
  title,
}: SeoDataResponse) {
  return {
    title: title,
    description: description,

    alternates: {
      canonical: `https://example.com`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://example.com`,
      locale: "en_US",
      type: "website",
      siteName: "Example Site",
      images: [
        {
          url: "https://example.com/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}
