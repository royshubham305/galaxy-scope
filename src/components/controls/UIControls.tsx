import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { ControlButton } from './ControlButton';
import { dispatchCanvasEvent } from '../../utils/sceneControls';

export function UIControls() {
  return (
    <div className="absolute bottom-5 right-5 flex gap-2">
      <ControlButton
        icon={ZoomIn}
        onClick={() => dispatchCanvasEvent('zoom', -100)}
        label="Zoom in"
      />
      <ControlButton
        icon={ZoomOut}
        onClick={() => dispatchCanvasEvent('zoom', 100)}
        label="Zoom out"
      />
      <ControlButton
        icon={RotateCcw}
        onClick={() => dispatchCanvasEvent('reset')}
        label="Reset view"
      />
    </div>
  );
}