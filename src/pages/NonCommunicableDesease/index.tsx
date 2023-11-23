import Banner from "@/components/Banner";
import InfoCard from "@/components/InfoCard";

export default function NonCommunicableDesease() {
  const cards = [
    {
      title: "diabete",
      text: "diabete é ruim",
      image:
        "https://natcofarma.com/wp-content/uploads/2023/03/quais-os-sintomas-de-diabetes-tipo-2-1200x900.jpg",
      alt: "exame de glicemia",
    },
    {
      title: "obesidade",
      text: "obesidade é ruim",
      image:
        "https://www.saudenaosepesa.com.br/content/Brazil/AFFILIATE/www-saudenaosepesa-com-br/pt_br/home/o-que-e-obesidade/_jcr_content/par_fullwidth/customstyles_186201740/customstyles_par/multicolumn/par-c1/nnimage.img.png/1625675328990.png",
      alt: "exame de glicemia",
    },

    {
      title: "diabete",
      text: "diabete é ruim",
      image:
        "https://natcofarma.com/wp-content/uploads/2023/03/quais-os-sintomas-de-diabetes-tipo-2-1200x900.jpg",
      alt: "exame de glicemia",
    },
    {
      title: "obesidade",
      text: "obesidade é ruim",
      image:
        "https://www.saudenaosepesa.com.br/content/Brazil/AFFILIATE/www-saudenaosepesa-com-br/pt_br/home/o-que-e-obesidade/_jcr_content/par_fullwidth/customstyles_186201740/customstyles_par/multicolumn/par-c1/nnimage.img.png/1625675328990.png",
      alt: "exame de glicemia",
    },
  ];

  return (
    <>
      <Banner
        imageSrc="https://www.state.gov/wp-content/uploads/2019/04/shutterstock_683522173-2560x852.jpg"
        alt="Banner"
      />
      <InfoCard
        title="As doenças"
        text="tome muito cuidado com elas"
        cards={cards}
      />
    </>
  );
}
