"use client";

import CodeBlock from "@/components/codeBlocks/CodeBlock";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const selectedCode = searchParams.get("code");
  const selectedLayout = searchParams.get("layout");

  useEffect(() => {
    // Load the iframeResizer script dynamically
    const script = document.createElement("script");
    script.src = "";
    script.async = true;
    script.onload = () => {
      // Initialize the iframeResizer once the script has loaded
      iFrameResize({ log: false, checkOrigin: false }, "#");
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="m-6">
      <div className="text-xl font-semibold my-6">
        Copy this code snippet and paste it into your project
      </div>
      <div>
        <CodeBlock
          codeSnippet={getFeedbacksEmbeddings({ selectedCode, selectedLayout })}
        />
      </div>
      <div className="text-xl font-semibold my-6">Live Preview</div>
      <div>
        <iframe
          id=""
          src={
            selectedLayout == "1"
              ? "http://localhost:3000/embeddings/test-122/react/base"
              : "http://localhost:3000/embeddings/test-122/react/scrollfeedback"
          }
          width="100%"
          style={{ height: "700px", overflow: "auto" }} // Adjust height as needed
          title="Testimonials"
        ></iframe>
      </div>
    </div>
  );
};

export default page;

export function getFeedbacksEmbeddings(options: any): string {
  switch (options.selectedCode) {
    case "react":
      return `
import React, { useEffect } from 'react';

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
        src="${options.selectedLayout == 1 ? "http://localhost:3000/embeddings/test-122/react/base" : "http://localhost:3000/embeddings/test-122/react/scrollfeedback"}"
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
    case "angular":
      return `
import { Component, OnInit, OnDestroy } from '@angular/core';

  @Component({
    selector: 'app-testimonial-embed',
    template: '
      <div>
        <iframe
          id=""
          src="${options.selectedLayout == 1 ? "http://localhost:3000/embeddings/test-122/react/base" : "http://localhost:3000/embeddings/test-122/react/scrollfeedback"}"
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
    case "next":
      return `
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
          src="${options.selectedLayout == 1 ? "http://localhost:3000/embeddings/test-122/react/base" : "http://localhost:3000/embeddings/test-122/react/scrollfeedback"}"
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
    default:
      return "";
  }
}
