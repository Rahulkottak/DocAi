import {saveAs} from "file-saver";

export default function saveFile(url) {
    if(!url) return
    saveAs(url,"dochub-download.jpg")
}
