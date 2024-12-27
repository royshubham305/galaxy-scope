export const dispatchCanvasEvent = (eventType: 'zoom' | 'reset', zoomDelta?: number) => {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;

  if (eventType === 'zoom' && zoomDelta !== undefined) {
    canvas.dispatchEvent(new WheelEvent('wheel', { deltaY: zoomDelta }));
  } else if (eventType === 'reset') {
    canvas.dispatchEvent(new CustomEvent('reset'));
  }
};