# Haoran Lu — engineering portfolio

Open `index.html` to preview. No installation or build step is needed.

The site has four projects, ordered newest to oldest by completion date: Cubli and printer kinematics (both June 2026, with Cubli first as the more recently started project), BIOGEM (2025), then the robot arm (summer 2023). Each has one figure and one video. The three local MP4s contain no audio tracks. BIOGEM uses your YouTube video and starts muted; viewers can unmute that external video.

## Publish on GitHub Pages

1. Extract the ZIP. Sign in at https://github.com and create a public repository named `YOUR-USERNAME.github.io`. If that already hosts another website, create `engineering-portfolio` instead.
2. Choose **Add file → Upload files** and upload the extracted folder's contents: `index.html`, `styles.css`, `content.js`, `media.js`, `app.js`, and the whole `assets` folder. Do not upload the ZIP or put the site inside another nested folder. Include `.nojekyll` if visible.
3. Commit the upload. Go to **Settings → Pages → Deploy from a branch**, choose **main** and **/(root)**, then Save.
4. Wait for deployment. Settings → Pages shows the URL. A username repository uses `https://YOUR-USERNAME.github.io/`; a project repository uses `https://YOUR-USERNAME.github.io/engineering-portfolio/`.

Both repository types work because assets use relative paths. Publication was not completed during creation because the local GitHub login was invalid.

## Maintain the website

| File | What to change |
| --- | --- |
| `content.js` | Introduction, project text, dates, education, skills, contact links. Array order is display order. |
| `media.js` | One figure and one video for each project. Each key matches the project's `id`. |
| `assets/` | Project photographs, figures, silent MP4s, video posters, résumé PDF. |
| `styles.css` | Color palette, fonts, and layout. |
| `index.html` | Browser title, search description, headings, and page structure. |
| `app.js` | Rendering code; usually leave alone. |

On GitHub, open the file, click the pencil icon, edit, and **Commit changes**. Pages automatically redeploys. Refresh after deployment; use Ctrl+F5 if you see an old version. For a rollback, open the file's History and copy a previous version into a new edit.

## Replace a figure

Upload a JPG, PNG, or WebP into `assets/`, then edit the project's `figure` in `media.js`:

```js
figure: {
  src: 'assets/my-project.jpg',
  alt: 'A specific description of what the image shows',
  caption: 'Short figure caption.'
},
```

The figure appears on the right on desktop and below the project on mobile. Clicking opens the full-size image. Keep filenames lowercase and avoid spaces. Preserve capitalization exactly in paths.

## Replace or add a video

For YouTube, use only the 11-character video ID:

```js
video: {
  type: 'youtube',
  src: 'I7I7TTtAOHQ',
  caption: 'Project demonstration. Starts muted.'
}
```

Enable embedding on YouTube and use a public or unlisted video. A Watch on YouTube link is provided if the embed is unavailable. The external player is muted initially, but its audio is not permanently removed.

For a local MP4, upload it to `assets/` and use:

```js
video: {
  type: 'mp4',
  src: 'assets/my-project-silent.mp4',
  poster: 'assets/my-project-poster.jpg',
  caption: 'Project demonstration.'
}
```

`poster` is optional. Use H.264 MP4 for broad compatibility. Browser uploads to GitHub are limited to 25 MiB per file; all included videos are below that limit. Use YouTube for larger videos.

To permanently remove audio from a future MP4, install FFmpeg and run this in a terminal. Choose a new output filename so you preserve the original:

```powershell
ffmpeg -i original.mp4 -map 0:v:0 -an -c:v copy -movflags +faststart silent.mp4
```

To check the result, `ffprobe -v error -select_streams a -show_entries stream=codec_type silent.mp4` should output no audio streams. Muting a player alone does not remove audio. The included local videos have already been processed this way.

## Add a project

Copy a complete project object in the `projects` array in `content.js`, give it a unique `id`, and edit its fields. Separate objects with commas. Insert it at the appropriate place in the array for newest-to-oldest ordering. Add the same id as a key in `media.js` with its `figure` and `video`. Avoid changing punctuation around text fields.

Optional links in a project:

```js
links: [{ label: 'Source code', url: 'https://github.com/YOUR-USERNAME/PROJECT' }]
```

To add your résumé, upload `assets/resume.pdf` and set the top-level `resume` field in `content.js` to that path. Set `github` to your actual profile URL. These buttons remain hidden until populated.

## Troubleshooting

- **404:** Check that Pages points to the correct branch and root folder and that `index.html` is there.
- **Projects disappear:** Check for missing commas, quotes, or brackets in `content.js` or `media.js`. The browser Console shows JavaScript errors.
- **Missing media:** Check the path and capitalization and confirm the asset was committed.
- **Old content:** Check the Actions tab for deployment status, then refresh without cache.

## Sources of included figures

- Cubli: prototype photograph from the team's `CHUNQ_Capstone_Report.pdf`.
- Printer: axis diagram from `ME499_winter_report.pdf`.
- BIOGEM: actuator and test-setup figure from `UIST2025__sustainable_actuator.pdf`.
- Robot arm: your `robot_arm_figure.jpg`.

Original source files on your desktop were left unchanged. Full reports are not included in the website package.

Official GitHub references: [publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [uploading files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
