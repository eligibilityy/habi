import { OfficialBanner } from "@/registry/habi/ui/official-banner";

export default function OfficialBannerFilipino() {
  return (
    <OfficialBanner
      lang="fil"
      aria-label="Opisyal na website ng gobyerno"
      statement="Opisyal na website ng Pamahalaan ng Pilipinas"
      reasons={[
        {
          title: "Gumagamit ng .gov.ph ang mga opisyal na website",
          description:
            "Nagtatapos sa .gov.ph ang mga website ng gobyerno. Mag-ingat sa mga address na kamukha lang nito.",
        },
        {
          title: "Tiyaking nagsisimula ang address sa https://",
          description:
            "Ibig sabihin ng https:// na ligtas kang nakakonekta sa website na ito.",
        },
        {
          title: "Ingatan ang iyong OTP at PIN",
          description:
            "Huwag itong ibigay kaninuman na nag-text, tumawag o nag-message sa iyo.",
        },
      ]}
    />
  );
}
