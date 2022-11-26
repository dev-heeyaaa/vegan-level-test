import Flexitarian from "../image/flexitarian.png";
import Vegan from "../image/vegan.png";
import Lacto from "../image/lacto.png";
import Ovo from "../image/ovo.png";
import LactoOvo from "../image/lactoovo.png";
import Pesco from "../image/pesco.png";
import Pollo from "../image/pollo.png";

export const resultData = [
  {
    id: 1,
    name: "비건",
    desc: "비건은 완전 채식주의자를 뜻합니다. 동물의 알, 유제품, 꿀 등 동물에서 얻은 식품을 일절 거부하고 완전히 식물성 식품만 먹습니다.",
    image: `${Vegan}`,
  },
  {
    id: 2,
    name: "락토 베지테리언",
    desc: "우유와 유제품은 먹지만 생선, 해물, 달걀은 먹지 않습니다. 락토 채식을 하는 분들은 주로 콩과 식물로부터 단백질을 섭취합니다. 불교의 음식도 락토 채식에 해당되며, 인도와 지중해 연안에서 락토 베지테리언을 흔히 볼 수 있다고 합니다.",
    image: `${Lacto}`,
  },
  {
    id: 3,
    name: "오보 베지테리언",
    desc: "라틴어로 'OVO'(오보)는 계란을 뜻하는 말입니다. 오보 채식은 동물의 알을 먹는 채식주의자를 뜻합니다.",
    image: `${Ovo}`,
  },
  {
    id: 4,
    name: "락토 오보 베지테리언",
    desc: "락토 오보 채식주의자는 생선과 해물을 안 먹지만 달걀, 우유, 유제품은 섭취하는 채식주의자입니다. 락토 오보 채식주의자에게 부족해지기 쉬운 단백질과 무기질은 계란과 우유로 섭취합니다.",
    image: `${LactoOvo}`,
  },
  {
    id: 5,
    name: "페스코 베지테리언",
    desc: "일반적인 고기라고 하는 것은 먹지 않고 해산물과 달걀, 유제품은 먹는 채식주의자 유형입니다.",
    image: `${Pesco}`,
  },
  {
    id: 6,
    name: "폴로 베지테리언",
    desc: "폴로 채식주의자는 붉은 살코기를 먹지 않지만 우유, 달걀, 생선, 그리고 닭고기나 오리고기 등 조류까지 허용되는 채식주의자입니다.",
    image: `${Pollo}`,
  },
  {
    id: 7,
    name: "플렉시테리안",
    desc: "플렉시테리안은 평소에 채식주의자로 생활하지만 상황에 따라 육식을 하는 채식주의자를 말합니다.",
    image: `${Flexitarian}`,
  },
];
