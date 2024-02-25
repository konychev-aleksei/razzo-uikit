import { Button } from "@/shared/UIKit";

import "./styles/global.scss";
import { SelectOne } from "@/shared/UIKit/Select";

const exampleOptions = [
  {
    id: 1,
    title: "Физическое лицо",
  },
  {
    id: 2,
    title: "Самозанятый",
  },
  {
    id: 3,
    title: "ООО Газпромбанк",
  },
  {
    id: 4,
    title: "ПАО Сбер",
  },
  {
    id: 5,
    title: "ООО БИМИТ",
  },
  {
    id: 6,
    title: "ООО Инстамаркет",
  },
  {
    id: 7,
    title: "Юридическое лицо",
  },
  {
    id: 8,
    title: "Чужезанятый",
  },
  {
    id: 9,
    title: "ООО ААА",
  },
  {
    id: 10,
    title: "ПАО Руби",
  },
  {
    id: 11,
    title: "ООО Технология",
  },
  {
    id: 12,
    title: "ООО Моя оборона",
  },
];

function App() {
  return (
    <div style={{ backgroundColor: "#fff", padding: "350px" }}>
      <Button primary>Отправить</Button>
      <SelectOne
        defaultValue={null}
        onChange={() => {}}
        label="Форма собственности"
        options={exampleOptions}
      />
    </div>
  );
}

export default App;
