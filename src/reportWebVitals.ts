import { ReportHandler } from 'web-vitals';
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
    });
  }
};
export default reportWebVitals;
