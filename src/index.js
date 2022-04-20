import React from 'react'
import { getMonthDiff } from './utils';
import {
  TimelineWrapper,
  YearWrapper,
  YearLabel,
  YearInnerWrapper,
  YearVerticalLine,
  TimelineItem,
  TimelineItemTag
} from './styled';

export const Timeline = ({ data = [], lightTheme = false }) => {
  // Составляем список уникальных значений из data.startYear и data.endYear
  let yearsSet = new Set();

  data.forEach(x => {
    yearsSet.add(x?.startDate.split('.').at(1))
    yearsSet.add(x?.endDate.split('.').at(1))
  });

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
    const filteredData = data.filter(x => Number(x?.startDate.split('.').at(1)) === year)
      .map(x => ({
        ...x,
        monthLength: getMonthDiff({
          startDate: { year: Number(x?.startDate.split('.').at(1)), month: Number(x?.startDate.split('.').at(0)) },
          endDate: { year: Number(x?.endDate.split('.').at(1)), month: Number(x?.endDate.split('.').at(0)) }
        }),
        startMonth: Number(x?.startDate.split('.').at(0)),
        order: x?.order || (data?.indexOf(x) + 1)
      }));
    // записываем в массив с годами
    yearsArray.push({
      year,
      items: filteredData
    })
  };
  return (
    <TimelineWrapper lightTheme={lightTheme} itemsCount={data?.length}>
      {yearsArray?.map(x =>
        <YearWrapper key={x?.year}>
          <YearLabel>{x?.year}</YearLabel>
          <YearInnerWrapper>
            <YearVerticalLine />
            {x?.items?.map(y =>
              <TimelineItem key={y?.title} item={y}>
                <TimelineItemTag />
                {y?.title}
              </TimelineItem>
            )}
          </YearInnerWrapper>
        </YearWrapper>
      )}
    </TimelineWrapper>
  );
};
