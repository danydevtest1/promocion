import {Routes,Route} from "react-router-dom";
import { ClientLayout} from '../layout';
import {Home} from '../pages/Web';

export function RoutesPage() {
  const loadLoyout=(Layout, Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
    )
  }
  return (
    <Routes>
        <Route path="/" element={loadLoyout(ClientLayout,Home)}/>
    </Routes>
  )
}
