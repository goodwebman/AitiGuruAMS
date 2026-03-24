import { Icons } from '@/shared/assets/svg/components'
import { InputDefault } from '@/shared/ui/inputs/input-default';

export const HomePage = () => {
  return (
    <div style={{'padding': '20px'}}>
      <InputDefault label="Hello world" placeholder='Test Input' contentRight={<Icons.EyeOff width={24} height={24}/>} contentLeft={<Icons.User width={24} height={24}/>} />
    </div>
  );
};
