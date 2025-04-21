import Image from "next/image";

const SortArrow = ({ active = false }: { active: boolean }) => {
  return (
    <div className="flex items-center">
      <Image
        className="rotate-180"
        src={`/icon/${active ? "PolygonActive.svg" : "PolygonDefault.svg"}`}
        alt="Sort-Arrow"
        width={7}
        height={6}
        priority
      />
      <Image
        src={`/icon/${active ? "PolygonActive.svg" : "PolygonDefault.svg"}`}
        alt="Sort-Arrow"
        width={7}
        height={6}
        priority
      />
    </div>
  );
};

export default SortArrow;
