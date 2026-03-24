module.exports = ({ componentName, jsx }, { tpl }) => {
  return tpl`
    import type { FC, SVGProps } from 'react';

    const ${componentName}: FC<SVGProps<SVGSVGElement> & { color?: string }> = ({
      color = 'var(--icon-secondary)',
      ...props
    }) => ${jsx};

    export default ${componentName};
  `;
};