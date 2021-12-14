export const breakpointPixelValues = {
  s: 360,
  m: 640,
  l: 960,
  xl: 1280,
}

export const breakpoints = {
  s: `(min-width: 360px)`,
  m: `(min-width: 640px)`,
  l: `(min-width: 960px)`,
  xl: `(min-width: 1300px)`,
  s_only: `(max-width: 640px) and (min-width: 360px)`,
  m_only: `(max-width: 960px) and (min-width: 640px)`,
  l_only: `(max-width: 1300px) and (min-width: 960px)`,
  s_m_only: `(max-width: 960px) and (min-width: 360px)`,
  initial_max: `(max-width: 360px)`,
  s_max: `(max-width: 640px)`,
  m_max: `(max-width: 960px)`,
}
