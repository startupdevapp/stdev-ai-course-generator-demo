import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'react-markdown-editor-lite/lib/index.css';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

const MarkdownDisplay = ({ children }: { children: string }) => {
	return (
		<Markdown
			remarkPlugins={[remarkGfm, remarkMath]}
			rehypePlugins={[rehypeKatex]}
			components={{
				code(props) {
					const { children, className, ...rest } = props;
					const match = /language-(\w+)/.exec(className || '');
					return match ? (
						<SyntaxHighlighter PreTag="div" language={match[1]} style={dracula}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code {...rest} className={className}>
							{children}
						</code>
					);
				},
				h1: ({ ...props }) => {
					return <h1 {...props} className="text-3xl font-bold mt-4 mb-2" />;
				},
				h2: ({ ...props }) => {
					return <h2 {...props} className="text-2xl font-bold mt-4 mb-2" />;
				},
				h3: ({ ...props }) => {
					return <h2 {...props} className="text-xl font-bold mt-4 mb-2" />;
				},
				h4: ({ ...props }) => {
					return <h2 {...props} className="text-lg font-bold mt-4 mb-2" />;
				},
				p: ({ ...props }) => {
					return <p {...props} className="text-lg mt-4 mb-2" />;
				},
				br: ({ ...props }) => <br {...props} />,
				ul: ({ ...props }) => {
					return (
						<ul {...props} className="list-disc list-inside mt-4 mb-2"></ul>
					);
				},
				ol: ({ ...props }) => {
					return (
						<ol
							{...props}
							className="ml-10 list-decimal list-inside mt-4 mb-2"
						/>
					);
				},
				li: ({ ...props }) => {
					return (
						<li {...props} className="ml-10 list-inside text-lg mt-4 mb-2" />
					);
				},
				img: ({ ...props }) => {
					return (
						<span className="flex item-center justify-center mt-8 mb-8">
							<img
								{...props}
								className="object-cover"
								width={900}
								height={500}
								alt="image"
							/>
						</span>
					);
				},
				blockquote: ({ ...props }) => {
					return (
						<blockquote
							{...props}
							className="border-l-4 border-myPrimaryBlue/50 p-2  pl-4 italic mt-4 mb-4"
						/>
					);
				},
				a: ({ ...props }) => {
					return (
						<a
							{...props}
							className="text-myPrimaryBlue underline hover:text-myPrimaryOrange"
						/>
					);
				},
				table: ({ ...props }) => {
					return <table {...props} className="table-auto w-full mt-6 mb-6" />;
				},
				tbody: ({ ...props }) => {
					return <tbody {...props} className="" />;
				},
				th: ({ ...props }) => {
					return (
						<th
							{...props}
							className="border border-myPrimaryBlue/80 p-2 text-left"
						/>
					);
				},
				td: ({ ...props }) => {
					return (
						<td
							{...props}
							className="border border-myPrimaryBlue/80 p-2 text-left"
						/>
					);
				},
			}}
		>
			{children}
		</Markdown>
	);
};

export default MarkdownDisplay;
