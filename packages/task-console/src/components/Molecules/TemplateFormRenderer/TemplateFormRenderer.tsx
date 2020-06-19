import React, { useEffect } from 'react';

interface IOwnProps {
  template: string;
  endpoint: string;
}

const TemplateFormRenderer: React.FC<IOwnProps> = ({ template, endpoint }) => {
  useEffect(() => {
    const listener = event => {
      if (template.startsWith(event.origin)) {
        window.alert('message: ' + JSON.stringify(event.data));
      }
    };
    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

  const url = `${template}${
    !template.endsWith('?') ? '?' : ''
  }endpoint=${endpoint}`;
  const iframe = (
    <iframe
      className="pf-u-w-100 pf-u-h-100"
      sandbox="allow-scripts allow-popups	"
      src={url}
    />
  );

  return <div className="pf-u-w-100 pf-u-h-100">{iframe}</div>;
};

export default TemplateFormRenderer;
