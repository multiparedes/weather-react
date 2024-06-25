import Card from "@/components/card";
import Heading from "@/components/heading";
import Button from "@/components/button";

export default function Index() {
  return (
    <>
      <Card className="flex flex-col gap-y-2 max-w-[30em] text-center items-center">
        <Heading title="Bienvenido a esta WebApp del tiempo"></Heading>
        <p className="text-slate-900">
          Mantente al tanto del clima con actualizaciones en tiempo real y un
          pronóstico de 5 días para tu ciudad. Ya sea cielos soleados o clima
          tormentoso, nuestro panel te mantiene informado y preparado.
        </p>
        <Button link="/location">Empezar!</Button>
      </Card>
    </>
  );
}
