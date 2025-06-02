import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import Badge from './components/Badge';
import IconText from './components/IconText';
import Note from './components/Note';
import NumberContainer from './components/NumberContainer';
import SupportBlock from './components/SupportBlock';
import type { MDXComponents } from 'mdx/types';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    Badge,
    IconText,
    Note,
    NumberContainer,
    SupportBlock,
    ...components,
  };
}
