import styled from 'styled-components';
import { hexToRGB } from './utils';

// ширина 1 месяца в пикселях, 1 год по макету занимает 270px
const monthCssWidth = 270 / 12;
// высота одного элемента на таймлайне
const itemCssHeight = 34;
// Отступ снизу у элементов на Timeline
const itemCssMarginBottom = 10

export const YearWrapper = styled.div`
  flex-basis: 270px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const YearLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-left: -20px;
`;

export const YearInnerWrapper = styled.div`
  position: relative;
`;

export const YearVerticalLine = styled.div`
  width: 1px;
  margin-top: 48px;
`;
export const TimelineWrapper = styled.div.attrs(props => ({
  lightTheme: props?.lightTheme || false
}))`
  display: flex;
  overflow-x: scroll;
  padding-left: 20px;
  
  ${YearLabel}{
    color: ${props => props?.lightTheme ? 
      'rgba(0, 0, 0, 0.3)' :
      'rgba(255, 255, 255, 0.3)'
    };
  };
  ${YearVerticalLine}{
    height: ${props => (itemCssHeight + itemCssMarginBottom) * props?.itemsCount}px;
    background: ${props => props?.lightTheme ? 
      'rgba(0, 0, 0, 0.3)' :
      'rgba(255, 255, 255, 0.3)'
    };
  };
`;

export const TimelineItemTag = styled.div`
  width: 6px;
  height: 100%;
  margin-right: 12px;
  border-radius: 4px;
`;

export const TimelineItem = styled.div.attrs(props => ({
  item: {
    ...props?.item,
    color: props?.item?.color || '#ffffff'
  }
}))`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  height: ${itemCssHeight}px;
  border-radius: 4px;
  padding: 3px;
  font-weight: 600;
  font-size: 14px;
  background: ${props => hexToRGB({ hex: props?.item?.color, alpha: 0.5 })};
  color: ${props => props?.item?.color};
  width: ${props => monthCssWidth * props?.item?.monthLength}px;
  top: ${props => (itemCssHeight + itemCssMarginBottom) * (props?.item?.order - 1)}px;
  left: ${props => props?.item?.startMonth / 12 * 100}%;

  ${TimelineItemTag}{
    background: ${props => props?.item?.color};
  }
`;
