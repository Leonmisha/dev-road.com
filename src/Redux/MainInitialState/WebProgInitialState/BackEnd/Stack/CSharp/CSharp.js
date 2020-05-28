import { CSharpASPNet } from './ToolsData';
import { GitHub } from '../../../../Common/Tools/commonTools';
import API from '../CommonTools/API/API';
import Architectures from '../CommonTools/Architectures/Architectures';
import BasicFront from '../CommonTools/BasicFront/BasicFront';
import Cashing from '../CommonTools/Cashing/Cashing';
import DB_Back from '../CommonTools/DB_Back/DB_Back';
import Internet from '../../../FrontEnd/Theory/Internet/Internet';
import Security from '../CommonTools/Security/Security';

const CSharp = {
  name: 'C#(ASP.NET)',
  links: [],
  children: [Internet, BasicFront, CSharpASPNet, DB_Back, API, GitHub, Cashing, Security, Architectures],
	conclusion: ''
}

export default CSharp
