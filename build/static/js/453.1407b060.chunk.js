(self.webpackChunkportfolio = self.webpackChunkportfolio || []).push([
	[453],
	{
		453: (e, t, n) => {
			n.r(t),
				n.d(t, {
					getCLS: () => y,
					getFCP: () => g,
					getFID: () => C,
					getLCP: () => P,
					getTTFB: () => D,
				});
			var i,
				r,
				a,
				o,
				u = (e, t) => ({
					name: e,
					value: void 0 === t ? -1 : t,
					delta: 0,
					entries: [],
					id: "v2-"
						.concat(Date.now(), "-")
						.concat(Math.floor(8999999999999 * Math.random()) + 1e12),
				}),
				c = (e, t) => {
					try {
						if (PerformanceObserver.supportedEntryTypes.includes(e)) {
							if ("first-input" === e && !("PerformanceEventTiming" in self))
								return;
							var n = new PerformanceObserver((e) => e.getEntries().map(t));
							return n.observe({ type: e, buffered: !0 }), n;
						}
					} catch (e) {}
				},
				f = (e, t) => {
					var n = function n(i) {
						("pagehide" !== i.type && "hidden" !== document.visibilityState) ||
							(e(i),
							t &&
								(removeEventListener("visibilitychange", n, !0),
								removeEventListener("pagehide", n, !0)));
					};
					addEventListener("visibilitychange", n, !0),
						addEventListener("pagehide", n, !0);
				},
				s = (e) => {
					addEventListener(
						"pageshow",
						(t) => {
							t.persisted && e(t);
						},
						!0,
					);
				},
				m = (e, t, n) => {
					var i;
					return (r) => {
						t.value >= 0 &&
							(r || n) &&
							((t.delta = t.value - (i || 0)),
							(t.delta || void 0 === i) && ((i = t.value), e(t)));
					};
				},
				v = -1,
				p = () => ("hidden" === document.visibilityState ? 0 : 1 / 0),
				d = () => {
					f((e) => {
						var t = e.timeStamp;
						v = t;
					}, !0);
				},
				l = () => (
					v < 0 &&
						((v = p()),
						d(),
						s(() => {
							setTimeout(() => {
								(v = p()), d();
							}, 0);
						})),
					{
						get firstHiddenTime() {
							return v;
						},
					}
				),
				g = (e, t) => {
					var n,
						i = l(),
						r = u("FCP"),
						a = (e) => {
							"first-contentful-paint" === e.name &&
								(f && f.disconnect(),
								e.startTime < i.firstHiddenTime &&
									((r.value = e.startTime), r.entries.push(e), n(!0)));
						},
						o =
							window.performance &&
							performance.getEntriesByName &&
							performance.getEntriesByName("first-contentful-paint")[0],
						f = o ? null : c("paint", a);
					(o || f) &&
						((n = m(e, r, t)),
						o && a(o),
						s((i) => {
							(r = u("FCP")),
								(n = m(e, r, t)),
								requestAnimationFrame(() => {
									requestAnimationFrame(() => {
										(r.value = performance.now() - i.timeStamp), n(!0);
									});
								});
						}));
				},
				h = !1,
				T = -1,
				y = (e, t) => {
					h ||
						(g((e) => {
							T = e.value;
						}),
						(h = !0));
					var n,
						i = (t) => {
							T > -1 && e(t);
						},
						r = u("CLS", 0),
						a = 0,
						o = [],
						v = (e) => {
							if (!e.hadRecentInput) {
								var t = o[0],
									i = o[o.length - 1];
								a &&
								e.startTime - i.startTime < 1e3 &&
								e.startTime - t.startTime < 5e3
									? ((a += e.value), o.push(e))
									: ((a = e.value), (o = [e])),
									a > r.value && ((r.value = a), (r.entries = o), n());
							}
						},
						p = c("layout-shift", v);
					p &&
						((n = m(i, r, t)),
						f(() => {
							p.takeRecords().map(v), n(!0);
						}),
						s(() => {
							(a = 0), (T = -1), (r = u("CLS", 0)), (n = m(i, r, t));
						}));
				},
				E = { passive: !0, capture: !0 },
				w = new Date(),
				L = (e, t) => {
					i ||
						((i = t), (r = e), (a = new Date()), F(removeEventListener), S());
				},
				S = () => {
					if (r >= 0 && r < a - w) {
						var e = {
							entryType: "first-input",
							name: i.type,
							target: i.target,
							cancelable: i.cancelable,
							startTime: i.timeStamp,
							processingStart: i.timeStamp + r,
						};
						o.forEach((t) => {
							t(e);
						}),
							(o = []);
					}
				},
				b = (e) => {
					if (e.cancelable) {
						var t =
							(e.timeStamp > 1e12 ? new Date() : performance.now()) -
							e.timeStamp;
						"pointerdown" == e.type
							? ((e, t) => {
									var n = () => {
											L(e, t), r();
										},
										i = () => {
											r();
										},
										r = () => {
											removeEventListener("pointerup", n, E),
												removeEventListener("pointercancel", i, E);
										};
									addEventListener("pointerup", n, E),
										addEventListener("pointercancel", i, E);
								})(t, e)
							: L(t, e);
					}
				},
				F = (e) => {
					["mousedown", "keydown", "touchstart", "pointerdown"].forEach((t) =>
						e(t, b, E),
					);
				},
				C = (e, t) => {
					var n,
						a = l(),
						v = u("FID"),
						p = (e) => {
							e.startTime < a.firstHiddenTime &&
								((v.value = e.processingStart - e.startTime),
								v.entries.push(e),
								n(!0));
						},
						d = c("first-input", p);
					(n = m(e, v, t)),
						d &&
							f(() => {
								d.takeRecords().map(p), d.disconnect();
							}, !0),
						d &&
							s(() => {
								var a;
								(v = u("FID")),
									(n = m(e, v, t)),
									(o = []),
									(r = -1),
									(i = null),
									F(addEventListener),
									(a = p),
									o.push(a),
									S();
							});
				},
				k = {},
				P = (e, t) => {
					var n,
						i = l(),
						r = u("LCP"),
						a = (e) => {
							var t = e.startTime;
							t < i.firstHiddenTime && ((r.value = t), r.entries.push(e), n());
						},
						o = c("largest-contentful-paint", a);
					if (o) {
						n = m(e, r, t);
						var v = () => {
							k[r.id] ||
								(o.takeRecords().map(a), o.disconnect(), (k[r.id] = !0), n(!0));
						};
						["keydown", "click"].forEach((e) => {
							addEventListener(e, v, { once: !0, capture: !0 });
						}),
							f(v, !0),
							s((i) => {
								(r = u("LCP")),
									(n = m(e, r, t)),
									requestAnimationFrame(() => {
										requestAnimationFrame(() => {
											(r.value = performance.now() - i.timeStamp),
												(k[r.id] = !0),
												n(!0);
										});
									});
							});
					}
				},
				D = (e) => {
					var t,
						n = u("TTFB");
					(t = () => {
						try {
							var t =
								performance.getEntriesByType("navigation")[0] ||
								(() => {
									var e = performance.timing,
										t = { entryType: "navigation", startTime: 0 };
									for (var n in e)
										"navigationStart" !== n &&
											"toJSON" !== n &&
											(t[n] = Math.max(e[n] - e.navigationStart, 0));
									return t;
								})();
							if (
								((n.value = n.delta = t.responseStart),
								n.value < 0 || n.value > performance.now())
							)
								return;
							(n.entries = [t]), e(n);
						} catch (e) {}
					}),
						"complete" === document.readyState
							? setTimeout(t, 0)
							: addEventListener("load", () => setTimeout(t, 0));
				};
		},
	},
]);
//# sourceMappingURL=453.1407b060.chunk.js.map
