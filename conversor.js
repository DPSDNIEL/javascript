import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function UnitConverter() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("kg-g");
  const [result, setResult] = useState(null);

  const convert = () => {
    let convertedValue;
    let numValue = parseFloat(value);

    if (isNaN(numValue)) {
      setResult("Valor inválido");
      return;
    }

    switch (unit) {
      case "kg-g":
        convertedValue = numValue * 1000;
        break;
      case "g-kg":
        convertedValue = numValue / 1000;
        break;
      case "cm-mm":
        convertedValue = numValue * 10;
        break;
      case "mm-cm":
        convertedValue = numValue / 10;
        break;
      default:
        convertedValue = "Erro";
    }

    setResult(convertedValue);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Card className="w-80 p-4">
        <CardContent className="flex flex-col gap-4">
          <Input
            type="number"
            placeholder="Digite um valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Select onValueChange={setUnit} value={unit}>
            <SelectTrigger>
              <SelectValue placeholder="Escolha a conversão" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kg-g">kg → g</SelectItem>
              <SelectItem value="g-kg">g → kg</SelectItem>
              <SelectItem value="cm-mm">cm → mm</SelectItem>
              <SelectItem value="mm-cm">mm → cm</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={convert}>Converter</Button>
          {result !== null && <p className="text-lg font-semibold">Resultado: {result}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
