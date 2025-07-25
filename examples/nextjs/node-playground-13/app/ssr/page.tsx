import { ExternalLink } from '#/ui/external-link';
import { RenderingInfo } from '#/ui/rendering-info';

export default function Page() {
const data = {
    title: 'bazinga',
    body: 'bazinga body'
  };

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <h1>{data.title}</h1>
    </div>
  );
}
