import React from 'react'
import styles from './styles.module.css'

export const getMonthDiff = ({ startDate, endDate }) => {
  let months;
  months = (endDate?.year - startDate?.year) * 12;
  months -= startDate?.month;
  months += endDate?.month;
  return months <= 0 ? 0 : months;
}

export const hexToRGB = ({hex, alpha}) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";

}

export const Timeline = ({ data = [] }) => {

  // Составляем список уникальных значений из data.startYear и data.endYear
  let yearsSet = new Set();

  data.forEach(x => {
    yearsSet.add(x?.startDate.split('.')[1])
    yearsSet.add(x?.endDate.split('.')[1])
  })

  // Находим минимальное, максимальное и текущее значение года
  const minInYearsSet = Math.min(...yearsSet);
  const maxInYearsSet = Math.max(...yearsSet);
  const currentYear = new Date().getFullYear();
  const minYear = minInYearsSet;
  const maxYear = maxInYearsSet < currentYear ? currentYear : maxInYearsSet;

  // Составляем массив годов от минимального (data.startDate) до максимального (data.endDate)
  // если максимальное значение в data.endDate меньше чем текущий год, то строим массив до текущего года
  // и помещаем необходимые данные из data в нужный год
  let yearsArray = [];
  for (let year = minYear; year <= maxYear; year++) {
    // находим данные для года, по которому проходим циклом
    // и считаем количество месяцев между data.startDate и data.endDate
    const filteredData = data.filter(x => x?.startDate.split('.')[1] == year)
      .map(x => ({
        ...x,
        monthLength: getMonthDiff({
          startDate: { year: Number(x?.startDate.split('.')[1]), month: Number(x?.startDate.split('.')[0]) },
          endDate: { year: Number(x?.endDate.split('.')[1]), month: Number(x?.endDate.split('.')[0]) }
        }),
        startMonth: Number(x?.startDate.split('.')[0]),
        order: data?.indexOf(x)
      }));
    // записываем в массив с годами
    yearsArray.push({
      year,
      items: filteredData
    })
  }

  // ширина 1 месяца в пикселях, 1 год по макету занимает 270px
  const monthCssWidth = 270 / 12;

  // высота одного элемента на таймлайне
  const itemCssHeight = 33 + 10;

  console.log(yearsArray)
  return (
    <div className={styles.timelineWrapper}>
      {yearsArray?.map(x =>
        <div key={x?.year} className={styles.yearWrapper}>
          <div className={styles.yearText}>{x?.year}</div>
          <div className={styles.yearInnerWrapper}>
            <div className={styles.yearLine}></div>
            {x?.items?.map(y =>
              <div
                key={y?.title}
                className={styles.timelineItem}
                style={{
                  color: y?.color,
                  background: hexToRGB({ hex: y?.color, alpha: 0.5 }),
                  width: monthCssWidth * y?.monthLength,
                  left: `${y?.startMonth / 12 * 100}%`,
                  top: `${y?.order * itemCssHeight}px`
                }}
              >
                <div style={{ background: y?.color }}></div>
                {y?.title}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}


/** TODO
 * styled components 
 * возможность кастомной стилизации
 * рефакторинг
 * вынести в отдельный файл хелперы
 */