import React from 'react';
import Unity, { UnityContext,  createUnityInstance} from "react-unity-webgl";
import './unity/TemplateData/style.css';
import './unity/TemplateData/fullscreen-button.png';
import './unity/TemplateData/favicon.ico';
import './unity/TemplateData/fullscreen-button.png';
import './unity/TemplateData/progress-bar-empty-dark.png';
import './unity/TemplateData/progress-bar-empty-light.png';
import './unity/TemplateData/progress-bar-full-light.png';
import './unity/TemplateData/unity-logo-dark.png';
import './unity/TemplateData/unity-logo-light.png';
import './unity/TemplateData/webgl-logo.png';


var loaderUrl = "./unity/Build/Build.loader.js";

const unityContext = new UnityContext({
  dataUrl: "./unity//Build/Build.data.gz",
  frameworkUrl: "./unity/Build/Build.framework.js.gz",
  codeUrl: "./unity/Build/Build.wasm.gz" + "/Build.wasm.gz",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "researchTesting",
  productVersion: "0.1",
});




const Model = () => {
  return (
    <div>
      <Unity unityContext={unityContext} />
      <div id="unity-container" class="unity-desktop">
      <canvas id="unity-canvas"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title">researchTesting</div>
      </div>
    </div>
    </div>
  )
}

export default Model
