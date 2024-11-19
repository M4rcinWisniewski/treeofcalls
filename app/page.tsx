import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Sidebar from "@/components/containers/Sidebar";

export default function Home() {
  return (
    <div className="">
      
      <ResizablePanelGroup 
        direction="horizontal"
      >
        <ResizablePanel defaultSize={30} className="p-4"><Sidebar /></ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>

    </div>
  );
}
