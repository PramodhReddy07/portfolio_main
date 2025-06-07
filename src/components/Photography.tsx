import React from 'react';
import Image from 'next/image';

const photos = [
  '8FCAF30B-0663-4705-83F9-3A4207AD769B_4_5005_c.jpeg',
  '481CDBCF-56BE-4A35-86C9-BF4E68CAAFA7_4_5005_c.jpeg',
  'DE80C579-481A-45CE-9012-D3ECFFA39756_4_5005_c.jpeg',
  'D019790C-1D1E-4AC1-BB0E-80AD1BAD1942_4_5005_c.jpeg',
  'C6B63D45-CD58-4731-B3EA-B62E91579F22_4_5005_c.jpeg',
  '52F327EF-E0AD-4A3E-8D6E-B206D125B3CC_4_5005_c.jpeg',
  '67916A57-3406-48C4-9F1E-5BF75E526953_4_5005_c.jpeg',
  '119B171E-6B00-47A5-8C5A-D5D61439ECB8_4_5005_c.jpeg',
  '7A9D856E-2BC0-472A-ADBB-33E4E26C815C_4_5005_c.jpeg',
  '5FD3733C-AD26-4436-AA78-0387505BB72D_4_5005_c.jpeg',
  'DD58854B-3500-450D-8110-C0D2FF012DFF_4_5005_c.jpeg',
  '6CED9EA3-50BC-4D49-89AF-CD88EC797165_4_5005_c.jpeg',
  '9714DE1B-423C-410D-BA77-B9789A2CB436_4_5005_c.jpeg',
  '7510B300-FF33-446E-86D5-12E6641EF5FE_1_105_c.jpeg',
  '1C2534A9-5497-48E0-8B76-DC4FEF76F679_4_5005_c.jpeg',
  '6BAA87A1-2E8A-42C0-BEF6-EF4037323BBF_1_105_c.jpeg',
  '32F01798-F26D-4BA7-8E8E-6AD5DCAF99E9_4_5005_c.jpeg',
  '9B051A75-61DE-4FEC-B56C-7DC78BEDBCE3_4_5005_c.jpeg',
  '6011E74D-5359-41D2-BC16-D7CADBC6B932_4_5005_c.jpeg',
  'BBBDF5A1-91B1-4027-9161-D0794DCC1047_4_5005_c.jpeg',
  '6B2BAF59-1B1C-4D8D-98D2-AD65E123C0AD_4_5005_c.jpeg',
  '58E46D7D-4EF1-4586-BEE9-3B5BC517D31B_1_105_c.jpeg',
  'A5DAFCE6-A890-4F20-8595-0F01E2C20297_4_5005_c.jpeg',
  'D4FBEF80-948B-4A50-9DD7-FEA0575CD436_4_5005_c.jpeg',
  '11F22F5D-5DD1-4975-9AA5-A9B8343A6DBC_4_5005_c.jpeg',
  '1245423A-C2E3-4025-BEF0-631B91C116F7_4_5005_c.jpeg',
  'E11997CA-A61D-4CB5-B065-A4C1B2F72059_4_5005_c.jpeg',
  '1082AB5C-F7F1-44D5-8B62-9E5C19AF3DB4_4_5005_c.jpeg',
  'A9DCB5D1-D6D3-486C-AA45-8093188386B5_4_5005_c.jpeg',
  '385F54B6-DB02-4A70-B8DB-69753B1212E5_4_5005_c.jpeg',
  '703777A9-9FCC-4515-870B-32ED2624C8A9_4_5005_c.jpeg',
  'FE7AE2B6-1AF3-48CA-93CF-CE85834F7A32_4_5005_c.jpeg',
  '20BA0804-355B-4FF6-AF01-0096B4660FFE_4_5005_c.jpeg',
  '427EECAF-AE96-4AA3-A42A-7C2279778532_4_5005_c.jpeg',
  '8B11F536-AAE8-4E4D-B964-DEA86289B648_4_5005_c.jpeg',
  'C95D5C20-7C5F-4A9E-BC02-5E72367B5392_4_5005_c.jpeg',
  'C0FE5659-8B92-4467-BAB4-B7E81F9CFB6B.jpeg'
];

// Shuffle the array
const shuffledPhotos = [...photos].sort(() => Math.random() - 0.5);

export default function Photography() {
  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      <h2 className="text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-center mb-8" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
        Beyond Tech &amp; Sports, <span className="italic font-normal text-gray-800 dark:text-white" style={{fontFamily: 'Georgia, Times New Roman, serif'}}>
          I Love<span className="inline-block align-middle">❤️</span> to capture moments
        </span>
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-1 space-y-1">
        {shuffledPhotos.map((src, idx) => (
          <div key={idx} className="group overflow-hidden rounded-2xl">
            <Image
              src={`/photos/${src}`}
              alt={`Photography ${idx + 1}`}
              width={600}
              height={900}
              className="rounded-2xl w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
              quality={90}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 