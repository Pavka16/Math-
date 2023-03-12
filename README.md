## **Math (log/trig)**
[![Build status](https://ci.appveyor.com/api/projects/status/yfsr6tvxbppvdnd3?svg=true)](https://ci.appveyor.com/project/Pavka16/math)
### **Легенда**

Мощь атаки магов и демонов привела к разбалансировке игрового мира. Поэтому вы ввели для игроков новые правила и возможности:
1. Сила урона зависит от расстояния. Для `Magician` и `Daemon` она падает линейно: на ближайшую клетку 100 %, на пятую клетку от себя — 60 %, на вторую клетку — 90 %, на третью — 80 %, на четвёртую — 70 %.
2. Возможность насылать «дурман» на магов и демонов. При этом сила их атаки падает уже не только линейно, а по формуле: `attack — log2(x) * 5`, где `x` — это расстояние в клетках. `attack` рассчитывается с учётом п. 1. 
 
*Пример*: атака в 100 единиц, атакуем вторую клетку от себя, получаем вместе с дурманом 85 вместо 90.

### **Описание**

Реализуйте классы `Magician` и `Daemon` с `get/set stoned`. При этом `get/set attack` должен учитывать логику, описанную в легенде.

*Подсказка*: используйте класс `Math` и наследование, чтобы не дублировать код.

>Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.