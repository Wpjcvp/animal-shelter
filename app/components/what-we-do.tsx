import Image from "next/image";

const Left = () => {
  return (
    <div className="w-1/2 flex px-10 justify-end">
      <Image src="/dog-1.png" width={300} height={300} alt="" />
    </div>
  );
};

const Right = () => {
  return (
    <div className="w-1/2">
      <div className="w-96 flex flex-col items-center text-lg gap-y-2">
        <div className="text-center font-semibold text-2xl">
          Чем мы занимаемся?
        </div>
        <div className="text-center mt-2">
          Помогаем обрести дом бездомным собакам. Брошенным, потерянным и тем,
          кто никогда не знал, что такое хозяин.
        </div>
        <div className="text-center">
          Если вы хотите друга, пишите, спрашивайте, приезжайте знакомиться.
        </div>
        <div className="text-center">Наши хвостики ищут дом!</div>
        <a
          href="https://vk.com/club211389731"
          target="_blank"
          className="text-center mt-4 hover:opacity-75 delay-75"
        >
          <Image src="/vk.svg" width={40} height={40} alt="" />
        </a>
      </div>
    </div>
  );
};

export const WhatWeDo = () => {
  return (
    <div className="w-full py-12 bg-[#E7D7D3] flex gap-10">
      <Left />
      <Right />
    </div>
  );
};
