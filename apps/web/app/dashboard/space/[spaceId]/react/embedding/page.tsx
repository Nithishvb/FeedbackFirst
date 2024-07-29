"use client";

import CodeBlock from "@/components/codeBlocks/CodeBlock";
import { useSearchParams } from "next/navigation";

const reactCodeSnippet = `import React, { useEffect } from 'react';

const TestimonialEmbed = () => {
    useEffect(() => {
        // Load the iframeResizer script dynamically
        const script = document.createElement('script');
        script.src = "";
        script.async = true;
        script.onload = () => {
            // Initialize the iframeResizer once the script has loaded
            iFrameResize({ log: false, checkOrigin: false }, '#');
        };
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <iframe
                id=''
                src="http://localhost:3000/embeddings/test-122/react/base"
                frameBorder="0"
                scrolling="no"
                width="100%"
                style={{ height: '500px' }} // Adjust height as needed
                title="Testimonials"
            ></iframe>
        </div>
    );
};

export default TestimonialEmbed;
`;

const angularCodeSnippet = `
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonial-embed',
  template: '
    <div>
      <iframe
        id=""
        src="http://localhost:3000/embeddings/test-122/react/base"
        frameborder="0"
        scrolling="no"
        width="100%"
        style="height: 500px;" <!-- Adjust height as needed -->
        title="Testimonials"
      ></iframe>
    </div>
  ',
  styles: []
})
export class TestimonialEmbedComponent implements OnInit, OnDestroy {
  private scriptElement: HTMLScriptElement;

  ngOnInit(): void {
    // Load the iframeResizer script dynamically
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = "";
    this.scriptElement.async = true;
    this.scriptElement.onload = () => {
      // Initialize the iframeResizer once the script has loaded
      (window as any).iFrameResize({ log: false, checkOrigin: false }, '#');
    };
    document.body.appendChild(this.scriptElement);
  }

  ngOnDestroy(): void {
    // Cleanup function to remove the script when the component is destroyed
    if (this.scriptElement) {
      document.body.removeChild(this.scriptElement);
    }
  }
}
`;

const nextJsCodeSnippet = `
import React, { useEffect } from 'react';

const TestimonialEmbed = () => {
    useEffect(() => {
        // Load the iframeResizer script dynamically
        const script = document.createElement('script');
        script.src = "";
        script.async = true;
        script.onload = () => {
            // Initialize the iframeResizer once the script has loaded
            if (typeof window !== 'undefined') {
                (window as any).iFrameResize({ log: false, checkOrigin: false }, '#');
            }
        };
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <iframe
                id=''
                src="http://localhost:3000/embeddings/test-122/react/base"
                frameBorder="0"
                scrolling="no"
                width="100%"
                style={{ height: '500px' }} // Adjust height as needed
                title="Testimonials"
            ></iframe>
        </div>
    );
};

export default TestimonialEmbed;

`;

const codeSnippets = {
  react: reactCodeSnippet,
  angular: angularCodeSnippet,
  next: nextJsCodeSnippet,
};

const page = () => {
  const searchParams = useSearchParams();
  const selectedCode = searchParams.get("code");

  return (
    <div className="m-6">
      <div className="text-x font-semibold my-4">
        Copy this code snippet and paste it into your project
      </div>
      <div>
        <CodeBlock
          codeSnippet={codeSnippets[selectedCode] || codeSnippets.react}
        />
      </div>
    </div>
  );
};

export default page;
