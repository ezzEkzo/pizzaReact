import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='296' rx='15' ry='15' width='280' height='23' />
    <rect x='0' y='343' rx='0' ry='0' width='280' height='65' />
    <rect x='1' y='424' rx='10' ry='10' width='95' height='30' />
    <rect x='126' y='424' rx='25' ry='25' width='152' height='45' />
    <circle cx='139' cy='156' r='125' />
  </ContentLoader>
);

export default Skeleton;
