const htmlEditor = document.getElementById('htmlEditor');
const cssEditor = document.getElementById('cssEditor');
const jsEditor = document.getElementById('jsEditor');
const previewFrame = document.getElementById('previewFrame');
htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);
jsEditor.addEventListener('input', updatePreview);
//in the above three lines of code we have applied a function(updatePreview) on the input in textarea 

function updatePreview() {
    const htmlContent = htmlEditor.value;
    const cssContent = `<style>${cssEditor.value}</style>`;//compile css by loading <style>
    const jsContent = `<script>${jsEditor.value}<\/script>`;//compile script
    const previewContent = `${htmlContent}\n${cssContent}\n${jsContent}`;//combining the whole code

    const iframeDocument = previewFrame.contentDocument;//like opening a blank page
    iframeDocument.open();//opening that blank page
    iframeDocument.write(previewContent);//write the combining code
    iframeDocument.close();
}
// local storage
function saveCode() {
    localStorage.setItem('htmlCode', htmlEditor.value);
    localStorage.setItem('cssCode', cssEditor.value);
    localStorage.setItem('jsCode', jsEditor.value);
}

// Load code from localStorage
function loadCode() {
    htmlEditor.value = localStorage.getItem('htmlCode') || '';
    cssEditor.value = localStorage.getItem('cssCode') || '';
    jsEditor.value = localStorage.getItem('jsCode') || '';
    updatePreview();// in local storage
}

window.addEventListener('load', loadCode);
window.addEventListener('beforeunload', saveCode);