import Bundle from '../Bundle';
/**
 * 懒加载
 * @param {*} loadComponent
 * @param {*} props
 */
const lazyLoad = (loadComponent) => (props) =>
  (
    <Bundle load={loadComponent}>
      {(Comp) => (Comp ? <Comp {...props} /> : <Loading />)}
    </Bundle>
  )
;
export default lazyLoad;
