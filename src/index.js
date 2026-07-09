// acg-mapper-api · Express HTTP wrapper around acg-mapper-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'acg-mapper', version: '1.0.0' }));

app.post('/saveState', async (req, res) => {
  try {
    const { saveState } = await import('@ai-native-solutions/acg-mapper-sdk');
    const out = typeof saveState === 'function' ? await saveState(req.body) : { error: 'saveState not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/loadState', async (req, res) => {
  try {
    const { loadState } = await import('@ai-native-solutions/acg-mapper-sdk');
    const out = typeof loadState === 'function' ? await loadState(req.body) : { error: 'loadState not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/toast', async (req, res) => {
  try {
    const { toast } = await import('@ai-native-solutions/acg-mapper-sdk');
    const out = typeof toast === 'function' ? await toast(req.body) : { error: 'toast not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/escHTML', async (req, res) => {
  try {
    const { escHTML } = await import('@ai-native-solutions/acg-mapper-sdk');
    const out = typeof escHTML === 'function' ? await escHTML(req.body) : { error: 'escHTML not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/usePreset', async (req, res) => {
  try {
    const { usePreset } = await import('@ai-native-solutions/acg-mapper-sdk');
    const out = typeof usePreset === 'function' ? await usePreset(req.body) : { error: 'usePreset not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/classify', async (req, res) => {
  try {
    const { classify } = await import('@ai-native-solutions/acg-mapper-sdk');
    const out = typeof classify === 'function' ? await classify(req.body) : { error: 'classify not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('acg-mapper-api listening on :' + PORT));
